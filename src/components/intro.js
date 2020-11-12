/** @jsx jsx */
import { Link } from 'gatsby';
import { Box, Button, Container, jsx } from 'theme-ui';

const Intro = () => (
  <Container sx={{ variant: 'layout.intro' }}>
    <Box sx={{ variant: 'layout.container', marginTop: '-10rem' }}>
      <Box sx={{ variant: 'layout.', textAlign: 'center' }}>
        <h2 sx={{ variant: 'layout.h2' }}>Yoga Sutras of Patanjali</h2>
        <h3 sx={{ variant: 'layout.h3' }}>
          In the tradition of T. Krishnamacharya
        </h3>
        <h3 sx={{ variant: 'layout.h3' }}>and T. K. V. Desikachar</h3>
        <Link to="/docs/getting-started">
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
