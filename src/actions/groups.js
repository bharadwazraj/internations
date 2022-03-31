export const deleteGroup = group => ({
  type: "DELETE_GROUP",
  group
});

export const editGroup = (index, editedGroup) => ({
  type: "EDIT_GROUP",
  index,
  editedGroup
});
