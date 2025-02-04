import { useState } from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Link,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { footerData } from './FooterData';

const FooterMobile = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ pb: 7 }}>
      {footerData.map((section) => (
        <Accordion
          key={section.title}
          expanded={expanded === section.title}
          onChange={handleChange(section.title)}
          sx={{
            '&:before': { display: 'none' },
            boxShadow: 'none',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>{section.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {section.links.map((link) => (
                <Box component="li" key={link.label} sx={{ mb: 2 }}>
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
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Mobile Footer Bottom */}
      <Box
        sx={{
          p: 2,
          borderTop: '1px solid',
          borderColor: 'divider',
          textAlign: 'center',
        }}
      >
        <Typography color="text.secondary" sx={{ fontSize: '0.875rem', mb: 1 }}>
          © 2024 Your Company, Inc.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Link href="/privacy" color="text.secondary" sx={{ textDecoration: 'none' }}>
            Privacy
          </Link>
          <Link href="/terms" color="text.secondary" sx={{ textDecoration: 'none' }}>
            Terms
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterMobile;