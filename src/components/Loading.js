import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const Loading = () => (
  <Segment>
    <Dimmer active inverted>
      <Loader inverted content="Loading" />
    </Dimmer>

    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
  </Segment>
);

export default Loading;
