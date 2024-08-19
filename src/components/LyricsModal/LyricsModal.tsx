import { ReactElement } from 'react';
import './LyricsModal.css'

interface ModalProps {
    title: string;
    content: ReactElement;
    onClose: () => void;
}

export const LyricsModal = ({ title, content, onClose }: ModalProps) => {
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='modalTitle'>
                    {title}
                    <button className='modalCloseButton' onClick={onClose}> x </button>
                </div>
               {content}
            </div>
        </div>
    )
}