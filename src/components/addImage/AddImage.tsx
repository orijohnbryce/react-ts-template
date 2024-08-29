import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Modal } from "react-bootstrap"
import { uploadProductImage } from '../../client/productApi';

type Props = {
    pid: number;
    showModal: boolean;
    setShowModal: any;
}

const AddImage = (props: Props) => {
    const [image, setImage] = useState<File | undefined>()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if (image){
            await uploadProductImage(props.pid, image);
            alert("image added");
            props.setShowModal(false);
        }else {
            alert("you must choose image")
        }
    }

    return (
        <div>
            <Modal show={props.showModal} onHide={() => props.setShowModal(false)}>

                <h4> product id: {props.pid}</h4>
                <br />
                <form onSubmit={handleSubmit}>
                    <input required type='file' onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        if (e.target.files) setImage(e.target.files[0])
                    }} />
                    <button type='submit'> UPLOAD </button>
                </form>
            </Modal>

        </div>
    )
}

export default AddImage