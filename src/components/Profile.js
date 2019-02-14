import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Header, Icon } from 'react-native-elements';
import { Card, CardSection, Button } from './common';
import { logoutUser, postingCreate } from '../actions';
import PostingForm from './PostingForm';



class Profile extends Component{
    static navigationOptions = {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name='account-circle' color={tintColor} size={35} />,
    };


    logOut = () => {
        this.props.logoutUser();
        this.props.screenProps.rootNavigation.navigate('Login')
    }

    onButtonSavePress = () => {
        var data = {
                link: this.props.link, 
                caption: this.props.caption,
                email: this.props.user.email
        }
        this.props.postingCreate(data) 
    }

    render() {
        return (
            <View>
                <Header 
                    containerStyle={{
                        backgroundColor: '#000',
                    }}
                    centerComponent={{
                        text: `${this.props.user.email}`, 
                        style: { color: '#fff', fontSize:15},
                        navigationOptions: {
                        tabBarLabel: "Log Out",
                        tabBarIcon: ({ tintColor }) => <Icon name='account-circle' color={tintColor} size={35} />
                        }
                    }}
                    rightComponent={{
                        icon: 'home',
                        color: '#fff',
                        onPress: this.logOut
                    }}
                />
                <Card>
                    <PostingForm />
                    <CardSection>
                        <Button onPress={this.onButtonSavePress}>
                            Post
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.auth.user)
    return { 
        user: state.auth.user,
        link: state.postForm.link,
        caption: state.postForm.caption
    }
}

export default connect(mapStateToProps, { logoutUser, postingCreate })(Profile);