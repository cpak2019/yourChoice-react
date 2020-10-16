import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Menu, Icon, Dropdown, Grid, List, Segment, Input} from 'semantic-ui-react';


class TopMenu extends React.Component {
  render() {
    return (
        <div
            style={{
              backgroundColor: 'black',
              height: '60px'
            }}>
          <Container>
        <Menu inverted pointing secondary borderless className="topmenu">
            <Menu.Item fitted>PLAYDEAD</Menu.Item>
            <Menu.Item fitted>ABOUT</Menu.Item>
            <Menu.Item fitted>CONTACT</Menu.Item>
            <Menu.Item fitted>STORE</Menu.Item>
            <Menu.Item fitted>EVENTS</Menu.Item>
            <Menu.Item fitted>NOSTALGIA</Menu.Item>
            <Menu.Item position="right" fitted><Icon name=" twitter "/></Menu.Item>
            <Menu.Item fitted><Icon name=" facebook "/></Menu.Item>
            <Menu.Item fitted><Icon name="linkedin"/></Menu.Item>
            <Menu.Item fitted><Icon name="instagram "/></Menu.Item>

        </Menu>
          </Container>

        </div>

    )
  }
}

class Middle extends React.Component {
  render() {
    return (
        <div
            style={{
              backgroundColor: '#1e1e1e',

            }}>
        <Container>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
            <Image src='./Game3_Banner-poster780.png' fluid />
            </Grid.Column>

          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
            <Image src='./LIMBO_game_animated.png' fluid />
            </Grid.Column>
            <Grid.Column>
              <Image src='./INSIDE_game_animated.png' fluid />
            </Grid.Column>

          </Grid.Row>
        </Grid>
  </Container>
        </div>


    )
  }
}

class Footer extends React.Component {
  render() {
    return (

        <div
            style={{
              backgroundColor: '#1e1e1e',

            }}>
          <Container>
            <Grid>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <List>
                    <List.Item><p3>Sign up for updates:</p3></List.Item>
                    <List.Item><Input action={{
                      color: 'black',
                      labelPosition: 'right',
                      icon: '',
                      content: 'Subscribe',
                    }} placeholder='your email address' fluid/></List.Item>
                    <List.Item><p2>© 2020 Playdead. All rights reserved.</p2></List.Item>
                    <List.Item><p2>Copenhagen, Denmark - Privacy Policy</p2></List.Item>

                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>

    )
  }
}



class WaikikiBrewing extends React.Component {

  render() {
    return (
          <div>
            <TopMenu/>
            <Middle/>
            <Footer/>
          </div>

    );
  }
}

ReactDOM.render(<WaikikiBrewing/>, document.getElementById('root'));