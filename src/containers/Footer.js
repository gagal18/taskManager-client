import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
const Footer = () => {
    return (
        <footer>
        <h2>Made by Bojan 2021</h2>
        <div className="iconFooter">
          <a href='https://github.com/gagal18'>
            <GitHubIcon fontSize="large" />
          </a>
          <a href='mailto:bojangagaleskidev@gmail.com'>
            <MailIcon fontSize="large" />
          </a>
        </div>
      </footer>
    )
}
export default Footer