export class Profile {
  constructor(img, title, locationTitle, location) {
    this.img = img;
    this.title = title;
    this.locationTitle = locationTitle;
    this.location = {
      lat: latitude,
      lng: longitude,
    };
    // this.location = location;
    this.id = new Date().toString() + Math.random().toString();
  }
}

// export const PROFILE = [
//   new Profile(
//     "01",
//     require("../assets/images/default1.png"),

//     "Ліс",
//     "8",
//     "153",
//     "Ukraine"
//   ),
//   new Profile(
//     "02",
//     require("../assets/images/default.png"),

//     "Захід на Чорному морі",
//     "3",
//     "200",
//     "Ukraine"
//   ),
//   new Profile(
//     "03",
//     require("../assets/images/default2.png"),

//     "Старий будиночок у Венеції",
//     "50",
//     "200",
//     "Italy"
//   ),
// ];
