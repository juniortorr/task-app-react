import Nav from './Nav';
import styles from '../styles/New-Project.module.scss';
import { Form } from 'react-router-dom';
import storage from '../data';
import { useNavigate } from 'react-router-dom';
import Project from '../helpers/project';
async function action() {
  return console.log('done');
}

function NewProject() {
  let navigate = useNavigate();

  async function handleClick(e) {
    const project = new Project(e.target[0].value);
    await storage.addProject(project);
    navigate('/');
  }

  return (
    <>
      <Nav></Nav>
      <section>
        <Form method="post" onSubmit={handleClick} className={styles.newProjectPopup}>
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
export { action as formAction };
