import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

const LINKS = [
  { label: 'UI Component Gallery', href: 'https://sujung0708.github.io/ui_test/' },
  { label: 'Landing Page', href: 'https://sujung0708.github.io/landing-page/' },
];

function App() {
  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #eebefa, #d48ef5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      py: { xs: 4, md: 8 },
      px: { xs: 2, md: 3 },
    }}>
      <Container maxWidth='sm' disableGutters>
        <Box sx={{
          bgcolor: '#fff',
          borderRadius: { xs: '16px', md: '24px' },
          px: { xs: 3, sm: 5, md: 6 },
          py: { xs: 4, md: 6 },
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
        }}>

          {/* 아바타 */}
          <Box sx={{
            width: { xs: 64, md: 88 },
            height: { xs: 64, md: 88 },
            background: 'linear-gradient(135deg, #eebefa, #d48ef5)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: { xs: '1.8rem', md: '2.4rem' },
            mx: 'auto',
            mb: { xs: 2.5, md: 3.5 },
          }}>
            👨‍💻
          </Box>

          {/* 제목 */}
          <Typography
            variant='h1'
            component='h1'
            sx={{
              fontWeight: 700,
              color: '#1a1a2e',
              fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.9rem' },
              lineHeight: 1.3,
              mb: 1,
            }}
          >
            안녕하세요 성장하는 한수정입니다!
          </Typography>

          {/* 부제목 */}
          <Typography
            sx={{
              color: '#d48ef5',
              fontWeight: 600,
              fontSize: { xs: '0.875rem', md: '1rem' },
              mb: { xs: 2, md: 2.5 },
            }}
          >
            Web Developer
          </Typography>

          {/* 본문 */}
          <Typography
            sx={{
              color: '#555',
              lineHeight: { xs: 1.6, md: 1.8 },
              fontSize: { xs: '0.875rem', md: '1rem' },
              mb: { xs: 3.5, md: 5 },
            }}
          >
            React와 MUI를 활용한 모던 웹 개발을 공부하고 있습니다.
            <br />방문해 주셔서 감사합니다 😊
          </Typography>

          {/* 프로젝트 링크 버튼 */}
          <Stack
            spacing={{ xs: 1.5, md: 2 }}
            direction={{ xs: 'column', sm: 'row' }}
          >
            {LINKS.map(({ label, href }) => (
              <Button
                key={href}
                variant='outlined'
                color='primary'
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                fullWidth
                sx={{
                  borderRadius: '50px',
                  py: { xs: 1, md: 1.4 },
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  fontWeight: 600,
                }}
              >
                {label}
              </Button>
            ))}
          </Stack>

        </Box>
      </Container>
    </Box>
  );
}

export default App;
