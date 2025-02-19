"use client";
import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia, Box, Select, MenuItem } from "@mui/material";

export default function Home() {
  const [language, setLanguage] = useState("ar");
  
  const content = {
    ar: {
      title: "إعادة إعمار السودان",
      about: "إعادة إعمار السودان هي منصة رقمية تهدف إلى توثيق الأضرار الناجمة عن الحرب وربط المتضررين بالمتبرعين والمساهمين في عمليات إعادة البناء.",
      goals: [
        "توثيق شامل للأضرار",
        "توفير قاعدة بيانات للمتبرعين",
        "تحقيق الشفافية",
        "تعزيز العمل الجماعي",
      ],
      partners: "شركاؤنا",
      contact: "اتصل بنا",
    },
    en: {
      title: "Rebuilding Sudan",
      about: "Rebuilding Sudan is a digital platform aimed at documenting war damages and connecting affected individuals with donors and contributors to reconstruction efforts.",
      goals: [
        "Comprehensive damage documentation",
        "Providing a database for donors",
        "Ensuring transparency",
        "Enhancing collective efforts",
      ],
      partners: "Our Partners",
      contact: "Contact Us",
    },
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>{content[language].title}</Typography>
          <Select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            sx={{ color: "white", borderColor: "white" }}
          >
            <MenuItem value="ar">العربية</MenuItem>
            <MenuItem value="en">English</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>
      <Container>
        <Box textAlign="center" my={4}>
          <Typography variant="h4" gutterBottom>{content[language].about}</Typography>
        </Box>
        <Grid container spacing={3}>
          {content[language].goals.map((goal, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{goal}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center" my={4}>
          <Typography variant="h5">{content[language].partners}</Typography>
        </Box>
        <Box textAlign="center" my={4}>
          <Button variant="contained" color="primary">{content[language].contact}</Button>
        </Box>
      </Container>
    </>
  );
}
