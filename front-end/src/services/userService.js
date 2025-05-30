import { userProfileApi, updateUserProfileApi } from "../api/userProfileApi";

export const fetchUserProfile = async () => {
  try {
    const userData = await userProfileApi();
    return { success: true, data: userData };
  } catch (error) {
    return { success: false, error: "Failed to load user data. Please try again." };
  }
};

export const updateUserProfile = async (userData) => {
  if (userData.firstName.trim().length < 2 || userData.lastName.trim().length < 2) {
    return { 
      success: false, 
      error: "First name and last name must be at least 2 characters long." 
    };
  }

  try {
    const updatedUser = {
      firstName: userData.firstName.trim(),
      lastName: userData.lastName.trim()
    };
    
    await updateUserProfileApi(updatedUser);
    return { success: true, data: updatedUser };
  } catch (error) {
    return { 
      success: false, 
      error: error.message || "Failed to update profile. Please try again." 
    };
  }
}; 