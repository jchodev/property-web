// src/components/footer/Footer.tsx
import { Box, Container, Grid, Link, Typography, useTheme, useMediaQuery } from '@mui/material';
import { footerData } from './FooterData';
import FooterMobile from './FooterMobile';

const Footer = () => {
  const theme = useTheme();
  // 使用MUI的breakpoint來判斷是否為手機版
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) {
    return <FooterMobile />;
  }

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {footerData.map((section) => (
            <Grid item xs={12} sm={6} md={4} key={section.title}>
              <Typography
                variant="h6"
                color="text.primary"
                gutterBottom
                sx={{ fontSize: '1rem', fontWeight: 600 }}
              >
                {section.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {section.links.map((link) => (
                  <Box component="li" key={link.label} sx={{ mb: 1 }}>
                    <Link
                      href={link.href}
                      color="text.secondary"
                      sx={{
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Footer Bottom Section */}
        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Typography color="text.secondary" sx={{ fontSize: '0.875rem' }}>
            © 2024 Your Company, Inc.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="/privacy" color="text.secondary" sx={{ textDecoration: 'none' }}>
              Privacy
            </Link>
            <Link href="/terms" color="text.secondary" sx={{ textDecoration: 'none' }}>
              Terms
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;