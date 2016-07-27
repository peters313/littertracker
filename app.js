import React, { Component } from 'react'
import { Container, Header, Title, Button, Icon } from 'native-base'
​
export default class HeaderExample extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Button transparent>
                        <Icon name="ios-arrow-back" />
                    </Button>

                    <Title>Header</Title>

                    <Button transparent>
                        <Icon name="ios-menu" />
                    </Button>
                </Header>
            </Container>
        );
    }
}
