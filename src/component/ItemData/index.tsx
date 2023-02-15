import React, { useEffect, useState } from 'react'
import { IAddItem } from '../../@type/assets'
import './index.css'

type IItemProps = {
  selecetItem: IAddItem;
  onRemove: (item: any) => void
  onChangePassword: (item: any) => void
}

const ItemData: React.FC<IItemProps> = ({ selecetItem, onRemove, onChangePassword }) => {
  const [editVisibility, setEditVisibility] = useState(false)
  const [passwordValue, setPasswordValue] = useState<string>(selecetItem.password)
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false)

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value)
  }

  const onBtnSave = () => {
    setPasswordVisibility(false);
    setEditVisibility(false);
    onChangePassword(passwordValue)
    setPasswordValue('');
  }

  useEffect(() => {
    setEditVisibility(false);
    setPasswordValue('');
    setPasswordVisibility(false)
  }, [selecetItem])

  return (
    <div className='select-password'>
      <div className='area-inform'>
        <div className='area-login'>
          <div className='title'>Login</div>
          <div className='title'>{selecetItem.login}</div>
        </div>
        <div className='area-password'>
          <div className='title_password'>
            <div className='title'>Password</div>
            {
              !passwordVisibility === false ?
                <div onClick={() => setPasswordVisibility(!passwordVisibility)} className='visbility-btn unVisbility'>
                  <svg width="26px" height="26px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>Iconly/Two-tone/Password</title>
                    <g id="Iconly/Two-tone/Password" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                      <g id="Password" transform="translate(2.000000, 2.000000)" stroke="#000000" strokeWidth="1.5">
                        <path d="M14.3344,0.7502 L5.6654,0.7502 C2.6444,0.7502 0.7504,2.8892 0.7504,5.9162 L0.7504,14.0842 C0.7504,17.1112 2.6354,19.2502 5.6654,19.2502 L14.3334,19.2502 C17.3644,19.2502 19.2504,17.1112 19.2504,14.0842 L19.2504,5.9162 C19.2504,2.8892 17.3644,0.7502 14.3344,0.7502 Z" id="Stroke-1" opacity="0.400000006"></path>
                        <path d="M8.6923,10.0002 C8.6923,11.0222 7.8633,11.8522 6.8403,11.8522 C5.8183,11.8522 4.9893,11.0222 4.9893,10.0002 C4.9893,8.9782 5.8183,8.1482 6.8403,8.1482 C7.8633,8.1482 8.6923,8.9782 8.6923,10.0002 Z" id="Stroke-3"></path>
                        <polyline id="Stroke-5" points="8.6923 10.0002 15.0103 10.0002 15.0103 11.8522"></polyline>
                        <line x1="12.1816" y1="11.8517" x2="12.1816" y2="9.9997" id="Stroke-7"></line>
                      </g>
                    </g>
                  </svg>
                </div> :
                <div onClick={() => setPasswordVisibility(!passwordVisibility)} className='visbility-btn visbility'>
                  <svg width="26px" height="26px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>Iconly/Bulk/Password</title>
                    <g id="Iconly/Bulk/Password" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Password" transform="translate(2.000400, 1.999800)" fill="#000000" fillRule="nonzero">
                        <path d="M14.334,0 L5.665,0 C2.276,0 0,2.378 0,5.917 L0,14.084 C0,17.622 2.276,20 5.665,20 L14.333,20 C17.722,20 20,17.622 20,14.084 L20,5.917 C20,2.378 17.723,0 14.334,0" id="Fill-1" opacity="0.400000006"></path>
                        <path d="M6.8438,7.3987 C8.0138,7.3987 8.9938,8.1787 9.3138,9.2487 L9.3138,9.2487 L15.0138,9.2487 C15.4238,9.2487 15.7638,9.5887 15.7638,9.9987 L15.7638,9.9987 L15.7638,11.8487 C15.7638,12.2687 15.4238,12.5987 15.0138,12.5987 C14.5938,12.5987 14.2638,12.2687 14.2638,11.8487 L14.2638,11.8487 L14.2638,10.7487 L12.9338,10.7487 L12.9338,11.8487 C12.9338,12.2687 12.5938,12.5987 12.1838,12.5987 C11.7638,12.5987 11.4338,12.2687 11.4338,11.8487 L11.4338,11.8487 L11.4338,10.7487 L9.3138,10.7487 C8.9938,11.8187 8.0138,12.5987 6.8438,12.5987 C5.4038,12.5987 4.2338,11.4387 4.2338,9.9987 C4.2338,8.5687 5.4038,7.3987 6.8438,7.3987 Z M6.8438,8.8987 C6.2338,8.8987 5.7338,9.3887 5.7338,9.9987 C5.7338,10.6087 6.2338,11.0987 6.8438,11.0987 C7.4438,11.0987 7.9438,10.6087 7.9438,9.9987 C7.9438,9.3887 7.4438,8.8987 6.8438,8.8987 Z" id="Combined-Shape"></path>
                      </g>
                    </g>
                  </svg>
                </div>
            }
          </div>
          {
            !editVisibility ?
              !passwordVisibility ? <div className='title'>*******</div> : <div className='title'>{selecetItem.password}</div> :
              <input value={passwordValue}
                className='input-password'
                onChange={onChangeValue}
              />
          }
        </div>
      </div>
      <ul className='area-btn'>
        {
          editVisibility === false ?
            <li className='btn-item btn-edit' onClick={() => { setEditVisibility(!editVisibility) }}>EDIT</li> :
            <li className='btn-item btn-save' onClick={() => { onBtnSave() }}>SAVE</li>
        }
        {
          editVisibility === false ?
            <li className='btn-item btn-remove' onClick={() => onRemove(selecetItem.site)}>REMOVE</li> :
            <li className='btn-item btn-back' onClick={() => { setEditVisibility(false); setPasswordValue('') }}>BACK</li>
        }
      </ul>
    </div>

  )
}
export default ItemData
