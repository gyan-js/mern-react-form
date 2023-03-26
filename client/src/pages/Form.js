import React, {Component} from 'react'
import axios from 'axios'
class Form extends Component {

    constructor(){
        super()
        this.state = {
            name: '',
            username: '',
            email: '',
            password: ''
        }
        this.changeName = this.changeName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    changeUsername = (e) => {
        this.setState({
            
            username: e.target.value,
        })
    }

    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const credentials = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        
        axios.post('http://localhost:4000/app/signup', credentials).then(
            res => console.log(res.data)
        )
        this.setState = {
            name: '',
            username: '',
            email: '',
            password: ''
        }
    }
    render(){
  return (
    <div className=' min-h-screen bg-white overflow-hidden'>
       <div className=' text-xl py-28'>
        <h1 className='text-4xl font-bold text-[#5469d4] text-center font-mono'>WELCOME USER</h1>
    <div className='mt-[10px] w-full mx-w-md rounded shadow-[rgba(60,66,87,0.12)_0px_7px_14px_0px,rgba(0,0,0,0.12)_0px_3px_6px_0px] mx-auto my-0 max-w-[448px]' >
        <div className='flex flex-col drop-shadow-md form  max-w-[448px] w-[100%]  p-[30px] pb-[48px] '>
            <form >
            <div className='field pb-[24px] flex flex-col '>
                <label className='text-[#000]  text-[14px] '>FULL NAME</label>
                <input onChange={this.changeName} value={this.state.name} className='text-[16px] leading-[24px] min-h-[44px] rounded-[4px] outline-none border-none px-3 w-[380px]' maxLength="200" required placeholder='Enter your full name' />
            </div>
            <div className='field pb-[24px] flex flex-col '>
                <label className='text-[#000]  text-[14px] '>USERNAME</label>
                <input onChange={this.changeUsername} value={this.state.username} className='text-[16px] leading-[24px] min-h-[44px] rounded-[4px] outline-none border-none px-3 w-[380px]' maxLength="200" required placeholder='Enter your username'/>
            </div>
            <div className='field pb-[24px] flex flex-col '>
                <label className='text-[#000]  text-[14px] '>EMAIL</label>
                <input onChange={this.changeEmail} value={this.state.email} className='text-[16px] leading-[24px] min-h-[44px] rounded-[4px] outline-none border-none px-3 w-[380px]' maxLength="200" required placeholder='Enter your email' type="email" />
            </div>
            <div className='field pb-[24px] flex flex-col '>
                <label className='text-[#000]  text-[14px] '>PASSWORD</label>
                <input onChange={this.changePassword} value={this.state.password} className='text-[16px] leading-[24px] min-h-[44px] rounded-[4px] outline-none border-none px-3 w-[380px]' maxLength="200" required placeholder='Set your paasword'  type="password"/>
            </div>
            <button onClick={this.onSubmit} className='field w-[100%] h-[50px] bg-[#5469d4] text-white border-none ouline-none rounded-[20px] flex justify-center text-center py-[10px] font-sans font-bold cursor-pointer hover:scale-105 '> SIGN UP</button>
            </form>
        </div>
    </div>
       </div>
    </div>
  )
    }
}

export default Form