import React, { useState } from 'react';
import { Modal, Button, Form, Message } from 'rsuite';
import styles from './LoginModal.module.css';
import { useAppState } from '../../context/AppStateContext';
import { ACTIONS } from '../../context/appReducer';
import { loginAdmin } from '../../services/authService';

export default function LoginModal() {
  const { state, dispatch } = useAppState();
  const [formValue, setFormValue] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  function handleLogin() {
    const isValid = loginAdmin(formValue.username, formValue.password);

    if (!isValid) {
      setErrorMessage('Invalid admin credentials. Default demo login: admin / family123');
      return;
    }

    setErrorMessage('');
    dispatch({ type: ACTIONS.LOGIN_SUCCESS });
  }

  return (
    <Modal open={state.isLoginOpen} onClose={() => dispatch({ type: ACTIONS.CLOSE_LOGIN })} className={styles.modal} backdropClassName={styles.backdrop}>
      <Modal.Header>
        <Modal.Title>Admin Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form fluid formValue={formValue} onChange={setFormValue}>
          <Form.Group>
            <Form.ControlLabel>Username</Form.ControlLabel>
            <Form.Control name="username" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Password</Form.ControlLabel>
            <Form.Control name="password" type="password" autoComplete="off" />
          </Form.Group>
        </Form>

        <div className={styles.note}>
          This is a front-end-only demo login. Replace it with real backend auth later.
        </div>

        {errorMessage && <Message type="error" showIcon>{errorMessage}</Message>}
      </Modal.Body>
      <Modal.Footer>
        <Button appearance="primary" onClick={handleLogin}>Login</Button>
        <Button appearance="subtle" onClick={() => dispatch({ type: ACTIONS.CLOSE_LOGIN })}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}
