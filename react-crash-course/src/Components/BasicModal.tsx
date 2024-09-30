import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ReactNode } from 'react';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type ModalProps = {
    children: ReactNode
    open: boolean,
    setOpen: (open: boolean) => void
}

export default function BasicModal({children, open, setOpen}: ModalProps) {

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Add Property</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
      {children}
        </Box>
      </Modal>
    </div>
  );
}
