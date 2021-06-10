import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Header, Left,Card,CardItem, Body, Right, Button, Icon, Title, Content } from 'native-base';

const HomeScreen = () => {
    return (
        <Container>
        <Header>
          <Left>
          <Title>Savings Tracker</Title>
          </Left>
         
          <Right>
            <Button transparent>
              <Icon name='add' />
            </Button>
          </Right>
        </Header>
        <Content>
            <View style={{alignItems: "center", marginTop : 50}}>
                <Text>You Saved</Text>
                <Text style={{fontSize : 40, margin: 10}}>$83,456.57</Text>
            </View>
            <View style={{alignItems: "left", marginTop : 50}}>
                <Text style={{fontSize : 15, margin: 15}}>Savings Information</Text>
            </View>
            <View style={{margin : 10}}>
            <Card style={{borderRadius: 15, backgroundColor: "tomato"}}>
            <CardItem>
              <Body>
                <Text>
                Saving Detail will come here
                </Text>
                
              </Body>
            </CardItem>
          </Card>
          <Card style={{borderRadius: 15, backgroundColor: "tomato"}}>
            <CardItem>
              <Body>
                <Text>
                Another Saving Detail will come here
                </Text>
                
              </Body>
            </CardItem>
          </Card>
          <Card  style={{borderRadius: 15}}>
            <CardItem>
              <Body>
                <Text>
                Then another Saving Detail will come here
                </Text>
                
              </Body>
            </CardItem>
          </Card>
            </View>
        </Content>
      </Container>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
