
import React, {Component} from 'react'; 
import {storage} from '../firebase';
import axios from 'axios';
import img from "./image.png";

class ImageUpload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image:null,
			url:'',
			progress:0
		 }
		this.handleChange = this.handleChange.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
		//this.componentDidMount=this.componentDidMount.bind(this);
		//this.onSubmit = this.onSubmit.bind(this.state.url);
	}
	/*componentDidMount() {
  axios.get('http://172.16.82.90:3002/dat')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}*/
	
	handleChange = e =>{
		if(e.target.files[0]){
			const image = e.target.files[0];
			this.setState(()=>({image}));
		}
	}
	onSubmit = async(e) => {
		const user = await axios.post('http://172.16.82.90:3002/data',{
			url: this.state.url,
		})
		.then(function (response) {
			console.log(response);
		})
	}
	handleUpload = () => {
		const {image} = this.state;
		const uploadTask = storage.ref(`images/${image.name}`).put(image);
		uploadTask.on('state_changed',
			(snapshot) => {
				const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        		this.setState({progress});
			},
			(error) => {
				console.log(error);
			},
			() => {
				storage.ref('images').child(image.name).getDownloadURL().then(url => {
					this.setState({url:url})
					console.log(url);
					this.onSubmit();
				})
				
			});	
	}

	render(element,){

		const style = {
	      height: '100vh',
	      display: 'flex',
	      flexDirection: 'column',
	      alignItems: 'center',
	      justifyContent: 'center'
    };
		return (
			<div style ={style} >
			<img src={img} Height="300" Weight="400"></img>
			<h1>Upload Your Document Here!!</h1>
			<progress value={this.state.progress} max="100"/>
		<br/>
			<input type = "file" onChange={this.handleChange}/>
			<button onClick={this.handleUpload}>Upload</button>
			<br/><br/>
			<a href={this.state.url}>View Upload></a>
		</div>
			)
	}
}

export default ImageUpload;