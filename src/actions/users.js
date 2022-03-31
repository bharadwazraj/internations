export const deleteUser = user => ({
  type: "DELETE_USER",
  user
});
export const editUser = (index, editedUser) => ({
  type: "EDIT_USER",
  index,
  editedUser
});
