import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
      p: { xs: 2.5, md: 4 },
    }}>
      <Box sx={{
        bgcolor: '#fff',
        borderRadius: '20px',
        p: { xs: '36px 28px', md: '48px 40px' },
        maxWidth: 480,
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
      }}>

        {/* 아바타 */}
        <Box sx={{
          width: 80,
          height: 80,
          background: 'linear-gradient(135deg, #eebefa, #d48ef5)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.25rem',
          mx: 'auto',
          mb: 3,
        }}>
          👨‍💻
        </Box>

        {/* 제목 */}
        <Typography variant='h5' component='h1' sx={{ fontWeight: 700, color: '#1a1a2e', mb: 1 }}>
          안녕하세요 성장하는 한수정입니다!
        </Typography>

        {/* 부제목 */}
        <Typography sx={{ color: '#d48ef5', fontWeight: 600, mb: 2 }}>
          Web Developer
        </Typography>

        {/* 본문 */}
        <Typography sx={{ color: '#555', lineHeight: 1.7, mb: 4 }}>
          React와 MUI를 활용한 모던 웹 개발을 공부하고 있습니다.
          <br />방문해 주셔서 감사합니다 😊
        </Typography>

        {/* 프로젝트 링크 버튼 */}
        <Stack spacing={1.5}>
          {LINKS.map(({ label, href }) => (
            <Button
              key={href}
              variant='outlined'
              color='primary'
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              fullWidth
              sx={{ borderRadius: '50px', py: 1.2, fontWeight: 600 }}
            >
              {label}
            </Button>
          ))}
        </Stack>

      </Box>
    </Box>
  );
}

export default App;
