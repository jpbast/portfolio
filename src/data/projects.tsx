import { Project } from "@/typings/project";

const Breakout: Project = {
  title: "Breakout",
  shortDescription:
    "A platform for managing and creating professional live events",
  thumbnail: "/hero.png",
  text: (
    <p>
      This is a white-label system built for presenting scientific events. This
      whole system is made up of 5 apps: - Backend: it was built with Node.js
      and GraphQL. - Admin Panel: built with React. The admin user can set
      everything for the event over here. You can register users, create talks,
      upload videos, check how the live sessions are going, customize the whole
      theme (background, primary and secondary colors, buttons, etc.), among
      other things. - App: this is the app where the users can follow the
      events. You can watch the videos and live streamings, chat with other
      users, check the event agenda, schedule conversations with the speakers.
      For the conversations, we developed a dedicated page that works like a
      Google Meeting. - Desktop App: this is an Electron App, and it was built
      for managing the speaker files before their presentations. - Better
      Poster: this is a React app, and it’s a little bit far from the others. It
      consumes the same API, but it was built for creating and publishing
      virtual scientific posters. It should be integrated with the main App, but
      it’s not yet. The user can create their poster and share it by a link.
      This is a really big project with many different features. Some of my
      contributions I can highlight are the development of the conversation view
      on the main App and the page that follows the live sessions going on. The
      app works with a subscription, and I don’t have access to the API at the
      moment, so I’ll let a screenshot that I’ve found when I was working on a
      feature for adding transcription for the videos:
    </p>
  ),
};

export const projects = [
  Breakout,
  ...Array(6)
    .fill(0)
    .map((_, index) => ({
      thumbnail: "/hero.png",
      title: `Enoteca Mundi - ${index}`,
      shortDescription:
        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum",
      text: (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pellentesque ligula est, et iaculis velit interdum non. Integer
            molestie, mauris at tincidunt rutrum, erat libero vehicula neque,
            non egestas risus libero vel magna. Aliquam tempus augue lorem,
            feugiat consequat lorem tincidunt a. Integer id nulla ac urna
            ultricies scelerisque. Nam eleifend nisl justo, sed auctor elit
            imperdiet vulputate. Proin at felis ac enim fringilla convallis.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Maecenas quis quam ac nunc vehicula pulvinar.
            Pellentesque a laoreet tortor. Nam enim felis, suscipit a felis sed,
            tincidunt venenatis velit. Mauris a pretium nisl. Sed in velit
            ipsum. Fusce nec est arcu. Nam ac consectetur metus.
          </p>
          <p>
            Vestibulum sodales felis eu massa molestie, eu consectetur mi
            pharetra. Proin at tincidunt massa, vel eleifend lacus. Pellentesque
            rutrum non ipsum non convallis. Maecenas at magna convallis, dapibus
            turpis eget, sagittis arcu. Phasellus ullamcorper, erat id porttitor
            pellentesque, lectus ligula posuere arcu, nec mollis quam massa eget
            orci.
          </p>
        </>
      ),
    })),
] as Project[];
