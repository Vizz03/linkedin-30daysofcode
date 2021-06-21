import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  Pressable,
  TextInput,
} from 'react-native'

import {
  Container,
  Header,
  Left,
  Card,
  CardItem,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
} from 'native-base'

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [amount, setAmount] = React.useState('Amount')
  const [note, setNote] = React.useState('Note')
  const [number, onChangeNumber] = React.useState(null)

  return (
    <Container>
      <Header>
        <Left>
          <Title>Savings Tracker</Title>
        </Left>

        <Right>
          <Button transparent onPress={() => setModalVisible(true)}>
            <Icon name="add" />
          </Button>
        </Right>
      </Header>
      <Content>
        <View style={{ alignItems: 'center', marginTop: 50 }}>
          <Text>You Saved</Text>
          <Text style={{ fontSize: 40, margin: 10 }}>$83,456.57</Text>
        </View>
        <View style={{ alignItems: 'left', marginTop: 50 }}>
          <Text style={{ fontSize: 15, margin: 15 }}>Savings Information</Text>
        </View>
        <View style={{ margin: 10 }}>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.')
                setModalVisible(!modalVisible)
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Add New Saving or Withdraw</Text>
                  <TextInput
               
                    style={styles.input}
                    onChangeText={(amount)=> setAmount(amount)}
                    value={amount}
                  />
                     <TextInput
                    style={styles.input}
                    onChangeText={(note)=> setNote(note)}
                    value={note}
                  />
                  <View style={{flexDirection: 'row'}}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Cancel</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Done</Text>
                  </Pressable>
                  </View>
                
                </View>
              </View>
            </Modal>
          </View>
          <Card style={{ borderRadius: 15, backgroundColor: 'tomato' }}>
            <CardItem>
              <Body>
                <Text>Saving Detail will come here</Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{ borderRadius: 15, backgroundColor: 'tomato' }}>
            <CardItem>
              <Body>
                <Text>Another Saving Detail will come here</Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{ borderRadius: 15 }}>
            <CardItem>
              <Body>
                <Text>Then another Saving Detail will come here</Text>
              </Body>
            </CardItem>
          </Card>
        </View>
      </Content>
    </Container>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 200,
    borderRadius: 10
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    margin: 10,
    padding: 10,
    elevation: 2,
    width: 80
  },
  buttonOpen: {
    backgroundColor: 'green',
  },
  buttonClose: {
    backgroundColor: 'red',
    
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})
