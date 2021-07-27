import ContactForm from '../components/Contact-form';
import Filter from '../components/Filter';
import ContactsList from '../components/Contacts';

const ContactsView = () => {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Filter</h2>
        <Filter />

        <h2>Contacts</h2>
        <ContactsList />
      </>
    );
  }


export default ContactsView;


//------------------------------------------------
// const barStyles = {
//   display: 'flex',
//   alignItems: 'flex-end',
//   marginBottom: 20,
// };

// class ContactsView extends Component {
  // state = {
  //   showModal: true,
  // };

  // componentDidMount() {
  //   this.props.fetchTodos();
  // }

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

//   render() {
//     // const { showModal } = this.state;

//     return (
//       <>
//         {/* <div style={barStyles}> */}
//           {/* <Filter />
//           <Stats /> */}
//           {/* <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
//             <AddIcon width="40" height="40" fill="#fff" />
//           </IconButton> */}

//           {/* {this.props.isLoadingTodos && <h1>Загружаем...</h1>}
//         </div> */}

//         {/* <TodoList /> */}

//         <h1>Phonebook</h1>
//         <ContactForm />

//         <h2>Filter</h2>
//         <Filter />

//         <h2>Contacts</h2>
//         <ContactsList />

//         {/* {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <TodoEditor onSave={this.toggleModal} />
//           </Modal>
//         )} */}
//       </>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   isLoadingTodos: todosSelectors.getLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchTodos: () => dispatch(todosOperations.fetchTodos()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
// export default ContactsView;