import { Box, Dialog, InputBase, TextField, Typography, styled } from '@mui/material';
import { Close, DeleteOutline } from '@mui/icons-material';
import { useState } from 'react';

const MainHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  background: "#f2f6fc",
  "& >p": { fontSize: 14, fontWeight: 500 }
});

const ReceipientWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: '0px 15px',
  '& > div': {
    fontSize: 14,
    borderBottom: '1px solid #f5f5f5',
    marginTop: 10
  }
});

const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: '10px 15px'
});

const SendButton = styled(Box)({
  background: '#0B57D0',
  color: '#fff',
  fontWeight: 500,
  textTransform: "none",
  borderRadius: 18,
  width: 100,
  textAlign: "center",
  cursor: "pointer"
});

export default function ComposeMail({ openDialog, setOpenDialog }) {
  const [data, setData] = useState({
    to: "",
    subject: "",
    body: ""
  });

  // Default sender info
  const sender = {
    from: process.env.REACT_APP_EMAIL_USER || "your-email@gmail.com",
    name: "Deepu Tiwari"
  };

  // Save draft if dialog is closed
  const closeComposeMail = async () => {
    if (data.to || data.subject || data.body) {
      const payload = {
        ...data,
        ...sender,
        type: "draft",
        date: new Date(),
        starred: false,
        image: ""
      };

      try {
        await fetch("http://localhost:8000/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.error("Error saving draft:", err);
      }
    }
    setOpenDialog(false);
    setData({ to: "", subject: "", body: "" });
  };

  // Send email
  const sendEmail = async () => {
    if (!data.to || !data.subject || !data.body) {
      alert("Please fill To, Subject, and Body fields");
      return;
    }

    const payload = {
      ...data,
      ...sender,
      type: "sent",
      date: new Date(),
      starred: false,
      image: ""
    };

    try {
      const res = await fetch("http://localhost:8000/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await res.json();
      if (res.ok) {
        alert("Email sent and saved successfully");
        setOpenDialog(false);
        setData({ to: "", subject: "", body: "" });
      } else {
        alert("Error: " + result.message);
      }
    } catch (err) {
      alert("Error sending email: " + err.message);
    }
  };

  return (
    <Dialog
      open={openDialog}
      slotProps={{
        paper: {
          sx: {
            borderRadius: "16px",
            padding: "8px",
            width: "800px",
            maxWidth: "none",
          },
          elevation: 5,
        },
      }}
    >
      <MainHeader>
        <Typography>New Message</Typography>
        <Close fontSize="small" onClick={closeComposeMail} sx={{ cursor: "pointer" }} />
      </MainHeader>

      <ReceipientWrapper>
        <InputBase
          placeholder='Enter recipient'
          value={data.to}
          onChange={(e) => setData({ ...data, to: e.target.value })}
        />
        <InputBase
          placeholder='Enter subject'
          value={data.subject}
          onChange={(e) => setData({ ...data, subject: e.target.value })}
        />
      </ReceipientWrapper>

      <TextField
        placeholder="Enter message"
        multiline
        rows={15}
        value={data.body}
        onChange={(e) => setData({ ...data, body: e.target.value })}
        sx={{ '& .MuiOutlinedInput-notchedOutline': { border: "none" } }}
      />

      <Footer>
        <SendButton onClick={sendEmail}>Send</SendButton>
        <DeleteOutline onClick={closeComposeMail} sx={{ cursor: "pointer" }} />
      </Footer>
    </Dialog>
  );
}
