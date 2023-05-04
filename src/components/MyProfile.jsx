import PropTypes from "prop-types";
function MyProfile({ data }) {
  MyProfile.propTypes = {
    data: PropTypes.string.isRequired, // Add the missing prop type validation
  };
  return (
    <div>
      <img
        className="avatar"
        alt={"Photo of " + data.firstname}
        src={data.imageUrl}
        style={{
          width: data.imageSize,
          height: data.imageSize,
        }}
      />
      <p>
        My name is {data.firstname} {data.lastname}
      </p>
    </div>
  );
}

export default MyProfile;
