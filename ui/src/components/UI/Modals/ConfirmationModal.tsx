import React, {ReactElement} from 'react';
import iconClose from '../../assets/closeIcon.svg';
import CustomModal from './CustomModal';
import {observer} from 'mobx-react-lite';
import {Button} from "@material-ui/core";
import './ConfirmationModal.sass';
import spinner from "../../assets/spinner.svg";

interface ConfirmationModalProps {
    title?: string;
    content: any;
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    closeButtonText?: string;
    confirmButtonText?: any;
    subContent?: string;
    confirmDisabled?: boolean;
    isWide?: boolean;
    confirmButtonColor?: string;
    titleColor?: string;
    img?: ReactElement;
    isLoading?: boolean;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = observer(({title, content, isOpen, onClose, onConfirm, confirmButtonText, closeButtonText, subContent, confirmDisabled = false, isWide, confirmButtonColor, titleColor, img, isLoading}) => {

    return (
        <CustomModal open={isOpen} onClose={onClose} disableBackdropClick={true} isWide={isWide}>
            <div className="confirmationHeader">
                <div className="confirmationTitle" style={titleColor ? {color: titleColor} : {}}>{title ?? "CONFIRMATION"}</div>
                <img src={iconClose} onClick={onClose} alt="close"/>
            </div>
            <div className="confirmationText" style={img ? {display: "flex", alignItems: "center"} : {}}>
                {img && <div style={{paddingRight: 20}}>
                    {img}
                </div>}
                <div>
                    {content}
                    {subContent && <div style={{marginTop: 10, color: "#FFFFFF80"}}>
                        {subContent}
                    </div>}
                </div>
            </div>

            <div className="confirmationActions">
                <Button disabled={isLoading} style={{marginRight: 15}} variant="outlined" color="primary" size='large' onClick={onClose}>{closeButtonText ?? "CANCEL"}</Button>
                <Button disabled={confirmDisabled || isLoading} color='primary' variant='contained' style={confirmButtonColor ? {backgroundColor: confirmButtonColor} : {}} onClick={onConfirm} size='large' endIcon={isLoading && <img src={spinner} alt="spinner"/>}>{confirmButtonText ?? "YES"}</Button>
            </div>
        </CustomModal>
    )
});

export default ConfirmationModal;