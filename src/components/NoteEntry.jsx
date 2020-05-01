import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

export class NoteEntry extends Component {
	static propTypes = {

	};

	constructor(props){
		super(props);

		this.state= {
			title: null,
			category: null,
			note: null
		};
	}

	render(){

		console.log(this.state);
		return (	
			<div>
				<h2 id={"title"}> Notely </h2>
				<Form>
					<FormGroup>
						<InputGroup id="note_title_entry">
							<InputGroupAddon addonType="prepend">
								<InputGroupText>Title</InputGroupText>
							</InputGroupAddon>
							<Input
								type="text"
								placeholder="Enter your Title here!"
								onBlur={(event) => { this.setState({title:event.target.value}); }}
							/>
						</InputGroup>
					</FormGroup>

					<FormGroup>
						<InputGroup id="note_category_entry">
							<InputGroupAddon addonType="prepend">
								<InputGroupText>Category</InputGroupText>
							</InputGroupAddon>
							<Input 
								type="text"
								placeholder="Enter your Category here!" 
								onBlur={(event) => { this.setState({category:event.target.value}); }}
							/>
						</InputGroup>
					</FormGroup>

					<FormGroup>
						<Input type="textarea" name="note" id="note_text_entry" 
							onBlur={(event) => { this.setState({note:event.target.value}); }}
						/>
					</FormGroup>
				</Form>
			</div>
		);

		
	}



}