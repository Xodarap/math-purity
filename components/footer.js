import { Grid, Link, Typography } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Footer(){
  return <footer>
  <Grid container spacing={3} style={{ justifyContent: 'center' }}>
    <Grid item xs={12}>
      <Typography variant="body2" style={{ textAlign: 'center' }}>Made with ❤ by @benthamite
      {' • '}
      <Link href="https://statistok.com" target="_blank" rel="noopener noreferrer" 
      style={{ height: '20px' }}>
        Statistok TikTok Analytics
      </Link></Typography>
    </Grid>
    <Grid item xs={12} sm={4} md={3} style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>

      <a href="https://github.com/Xodarap/math-purity" target="_blank" rel="noopener noreferrer" style={{ height: '20px' }}>
        <GitHubIcon style={{ height: '20px' }} />
      </a>
      {' • '}
      <a href="https://www.tiktok.com/@benthamite" target="_blank" rel="noopener noreferrer" style={{ height: '20px' }}>
        <img src="tiktok.svg" style={{ height: '20px' }} />
      </a>
    </Grid>
  </Grid>
</footer>
}