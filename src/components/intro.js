/** @jsx jsx */
import { Link } from 'gatsby';
import { Box, Button, Container, jsx } from 'theme-ui';

const Intro = () => (
  <Container sx={{ variant: 'layout.container' }}>
    <Box sx={{ variant: 'layout.intro', marginTop: '-10rem' }}>
      <Box sx={{ variant: 'layout.', textAlign: 'center' }}>
        <h1 sx={{ variant: 'layout.h2' }}>Yoga Sutras of Patanjali</h1>
        <h3 sx={{ variant: 'layout.h3' }}>
          In the tradition of T. Krishnamacharya
        </h3>
        <h3 sx={{ variant: 'layout.h3' }}>and T. K. V. Desikachar</h3>
        <Link to="/Chapter-1/1-1/">
          <Button
            sx={{
              variant: 'layout.button',
              fontSize: '1.1rem',
              cursor: 'pointer',
            }}
          >
            Get Started
          </Button>
        </Link>
      </Box>
    </Box>
  </Container>
);

export default Intro;
