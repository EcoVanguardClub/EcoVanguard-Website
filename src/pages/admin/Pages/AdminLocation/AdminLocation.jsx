import React from 'react'
import InputComponent from '../../../../components/Input/input'
import Button from '../../../../components/Button/button'
import './admin_location.css'
import editIcon from '../../../../assets/admin-edit-icon.svg'
import deleteIcon from '../../../../assets/admin-delete-icon.svg'

const AdminLocation = () => {
    const locations = [1,2,3,4,5,6,7];
  return (
    <div className='location_container'>
        <h2>Locations</h2>
        <h4>Add Location</h4>
        <div className="add_location">
            <form action="">
               <section className='column'>
                      <div className='form_control'>
                          <label htmlFor="city">City</label>
                          <select name="" id="city" className='select'>
                              <option value="ibadan">Select city</option>
                              <option value="ibadan">Ibadan</option>
                              <option value="ibadan">Ibadan</option>
                              <option value="ibadan">Ibadan</option>
                              <option value="ibadan">Ibadan</option>
                          </select>
                      </div>

                      <div className='form_control'>
                          <label htmlFor="branch-name">Name</label>
                          <select name="" id="branch-name" className='select'>
                              <option value="ibadan">Branch Name</option>
                              <option value="ibadan">Ibadan</option>
                              <option value="ibadan">Ibadan</option>
                              <option value="ibadan">Ibadan</option>
                              <option value="ibadan">Ibadan</option>
                          </select>
                      </div>
               </section>

               <section className='column'>
                    <div className='component'>
                          <label htmlFor="map">Map Address</label>
                          <InputComponent type='url' placeholder='Location link' className='select' />
                    </div>
                    <Button className='component'>Add Location</Button>
               </section>
            </form>
        </div>

        <div className="locations">
            <h3>Available Locations</h3>
            <div className="location_heading">
                <h5>City</h5>
                <h5>Branch</h5>
                <h5>Map Address</h5>
            </div>
        <>
            
                {locations.map((item, index) => {
                    return (
                        <div className='location_details'>
                            <div className='details'>
                                <p>Ibadan</p>
                                <p>University of Ibadan </p>
                                <p>Map Address</p>
                            </div>
                            <div className='action_buttons'>
                                <img src={editIcon} alt="" className='action' />
                                <img src={deleteIcon} alt="" className='action' />
                            </div>
                        </div>
                    )
                })}
            
        </>
        </div>
    </div>
  )
}

export default AdminLocation