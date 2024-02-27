import styles from '../styles/New-Project.module.scss';
import { Form, useOutletContext } from 'react-router-dom';
import storage from '../data';
import { useNavigate } from 'react-router-dom';
import Project from '../helpers/project';

function NewProject() {
  // eslint-disable-next-line no-unused-vars
  const [status, setAlertStatus] = useOutletContext();
  let navigate = useNavigate();
  async function handleClick(e) {
    e.preventDefault();
    const project = new Project(e.target[0].value);
    await storage.addProject(project);
    setAlertStatus(() => 'alert');
    setTimeout(() => {
      setAlertStatus(() => 'display');
    }, 3000);
    navigate('/');
  }

  return (
    <>
      <section>
        <Form onSubmit={handleClick} className={styles.newProjectPopup}>
          <input
            name="project-name"
            required
            className={styles.title}
            type="text"
            placeholder="new project"
          ></input>
          <button type="button" className={styles.closePopup}>
            X
          </button>
          <div className={styles.newProjectOptions}>
            <button type="submit" className="createProject">
              Create New Project
            </button>
          </div>
        </Form>
      </section>
    </>
  );
}

export default NewProject;
