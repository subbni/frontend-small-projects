const FAQs = [
  {
    id: 1,
    title: 'What is Frontend Mentor, and how will it help me?',
    content:
      "Frontend Mentor offeres realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 2,
    title: 'Is Frontend Mentor free?',
    content:
      "The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference.",
  },
  {
    id: 3,
    title: 'Can I use Frontend Mentor projects in my portfolio?',
    content:
      'Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!',
  },
  {
    id: 4,
    title: "How can I get help if I'm stuck on a challenge?",
    content:
      'The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it\'s a great place to ask questions. We even have a dedicated "help" channel! If you haven\'t joined yet, you can get an invite to our Discord server here.',
  },
];

const faq__body = document.querySelector('.faq__body');
const div = document.createElement('div');
FAQs.map((faq) => {
  var element = `<div class='faq-item'>
  <div>
      <h2 class='faq-item__title'>${faq.title}</h2>
      <img src="./assets/images/icon-plus.svg" alt="icon-plus" />
      </div>
      <div class='faq-item__description' style="display: none;">${faq.content}</div>
    </div>`;
  faq__body.insertAdjacentHTML('beforeend', element);
  console.log(faq);
});

document.querySelectorAll('.faq-item img').forEach((img) => {
  img.addEventListener('click', function () {
    const description = this.parentElement.nextElementSibling;
    if (description.style.display === 'none') {
      description.style.display = 'inherit';
      this.src = './assets/images/icon-minus.svg'; // change to minus icon
    } else {
      description.style.display = 'none';
      this.src = './assets/images/icon-plus.svg'; // change back to plus icon
    }
  });
});
