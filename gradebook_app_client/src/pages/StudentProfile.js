import React from 'react'

const StudentProfile = (props) => {

    //State to hold our student profiles
    const [studentProfiles, setStudentProfiles] = React.useState([])

    //State to hold form data
    const [createForm, setCreateForm] = React.useState({
        student_id: "",
        name: "",
        address: "",
        guardian1: "",
        guardian1_number: "",
        guardian2: "",
        guardian2_number: "",
    })

    //Create a function to make API call to get student_profiles
    const getStudentProfiles = async () => {
        const response = await fetch("http://localhost:3000/student_profiles")
        const data = await response.json()
        setStudentProfiles(data)
    }

    //What will run the getStudentProfiles function once component loads
    React.useEffect(() => {
        getStudentProfiles()
      }, [])
    //Render the jsx for when the notices are loaded
    const loaded = () => {
        <>
        {studentProfiles.map((profile) => {
            return (
                <div>
                    <h1>{profile.student_id}</h1>
                    <h1>{profile.name}</h1>
                    <h1>{profile.address}</h1>
                    <h1>{profile.guardian1}</h1>
                    <h1>{profile.guardian1_number}</h1>
                    <h1>{profile.guardian2}</h1>
                    <h1>{profile.guardian2_number}</h1>
                    <button onClick={async () => {
                        //Make delete request
                        await fetch("http://localhost:3000/student_profiles/" + profile.id, {
                        method: "delete"
                        })
                        //get updated list of notices
                        getStudentProfiles()
                        }}>Delete</button>
                </div>
            )
        })}
        </>
    }


//our handleChange function for our create form
  const createChange = (event) => {
    setCreateForm({...createForm, [event.target.name]: event.target.value})
  }

//our handleCreate function for when the form is submitted
  const handleCreate = async(event) => {
    event.preventDefault() //prevent page refresh
    await fetch("http://localhost:3000/student_profiles", {
      method: "post",
      headers: {
        "Content-Type":"application/json" 
      },
      body: JSON.stringify(createForm)
    })
    //fetching an updated list of notices
    getStudentProfiles()
    setCreateForm({
      title: "",
      author: "",
      phone: ""
    })
  }
    return(
      <div>
        <h1>Add Student Profile</h1>
      <form onSubmit={handleCreate}>
        <input 
          type="integer" 
          name="student_id" 
          value={createForm.student_id} 
          onChange={createChange}
        />
        <input 
          type="text" 
          name="name" 
          value={createForm.name} 
          onChange={createChange}
        />
        <input 
          type="text" 
          name="address"
          value={createForm.address} 
          onChange={createChange}
        />
        <input 
          type="text" 
          name="guardian1"
          value={createForm.guardian1} 
          onChange={createChange}
        />
        <input 
          type="text" 
          name="guardian1_number"
          value={createForm.guardian1_number} 
          onChange={createChange}
        />
        <input 
          type="text" 
          name="guardian2"
          value={createForm.guardian2} 
          onChange={createChange}
        />
        <input 
          type="text" 
          name="guardian2_number"
          value={createForm.guardian2_number} 
          onChange={createChange}
        />
        <input 
          type="submit" 
          value="Create Student Profile" 
          />
      </form>
      <h1>Student Profiles</h1>
      {studentProfiles.length > 0 ? loaded() : <h3>there are no profiles</h3>}
      </div> 
    )
}

export default StudentProfile;