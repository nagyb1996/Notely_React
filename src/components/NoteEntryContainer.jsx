import {NoteEntry} from './NoteEntry';
import {connect} from 'react-redux';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
	updateNote: (note) => {
		//dispatch(Actions.updateNote(note))
	}
})

const NoteEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NoteEntry);

export default NoteEntryContainer;