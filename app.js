document.addEventListener('DOMContentLoaded', () => {


  const form = document.querySelector('#new-item-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const position = event.target.position.value;
    const rating = event.target.rating.value;

    const formInput = document.querySelector('#team-list');

    const teamListItem = document.createElement('p');

    teamListItem.textContent = `Name: ${name}, Position: ${position}, Rating: ${rating}`;

    teamListItem.classList.add('team-list-item');

    formInput.appendChild(teamListItem);

    form.reset();
  });




});
