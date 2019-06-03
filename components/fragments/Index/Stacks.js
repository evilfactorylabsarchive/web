export default ({ stacks }) => {
  return (
    <div>
      <h4>Some tech stacks we enjoy</h4>
      <ul>
        {stacks.map(stack => (
          <li key={stack.id}>
            <a href={stack.url} target='_blank' rel='noopener noreferrer'>
              {stack.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
