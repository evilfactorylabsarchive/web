export default ({ projects }) => (
  <>
    <div className='u-with-padding'>
      <h4>Software & Project we made</h4>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <a href={project.url} target='_blank' rel='noopener noopener'>
              {project.title}
            </a>{' '}
            - {project.description}
          </li>
        ))}
        <li>More awesome open source software will be announced.</li>
      </ul>
    </div>
    <div className='u-with-padding'>
      <h4>Clients we help</h4>
      <ul>
        <li>
          TBD. Need our help to build your next or existing project?{' '}
          <a href='mailto:hello@evilfactory.id'>Talk to us!</a>
        </li>
      </ul>
    </div>
  </>
)
