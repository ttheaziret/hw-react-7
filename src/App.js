import { useForm } from 'react-hook-form';

function RegistrationForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Last Name</label>
        <input {...register('lastName', { required: true })} />
      </div>
      <div>
        <label>First Name</label>
        <input {...register('firstName', { required: true })} />
      </div>
      <div>
        <label>Middle Name</label>
        <input {...register('middleName')} />
      </div>
      <div>
        <label>Year of Birth</label>
        <input {...register('yearOfBirth', { required: true, pattern: /\d{4}/ })} />
      </div>
      <div>
        <label>Phone Number</label>
        <input {...register('phoneNumber', { required: true, pattern: /^[0-9]{10}$/ })} />
      </div>
      <div>
        <label>Email</label>
        <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
