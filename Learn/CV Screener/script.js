console.log("CV Screener");

// contains information of candidates
const data = [
  {
    name: "Rohan Das",
    age: 18,
    city: "Kolkata",
    language: "C++",
    imgUrl: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Deepank",
    age: 24,
    city: "Delhi",
    language: "Java",
    imgUrl: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

// CV Iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? {
            value: profiles[nextIndex++],
            done: false,
          }
        : { done: true };
    },
  };
}

// Button listener for next button
const nextBtn = document.querySelector("#next");
nextBtn.addEventListener("click", nextCV);

const candidates = cvIterator(data);
function nextCV() {
  let currentProfile = candidates.next().value;
  let img = document.querySelector("#image");
  let profile = document.querySelector("#profile");

  img.innerHTML = `<img src=${currentProfile.imgUrl}>`;
  profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">${currentProfile.name}</li>
    <li class="list-group-item">${currentProfile.age}</li>
    <li class="list-group-item">${currentProfile.city}</li>
    <li class="list-group-item">${currentProfile.language}</li>
    <li class="list-group-item">${currentProfile.imgUrl}</li>
  </ul>`;
}
