const newHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="title"]').value;
  const body = document.querySelector('textarea[name="body"]').value;

  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newHandler);
