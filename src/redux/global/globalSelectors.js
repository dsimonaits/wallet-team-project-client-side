import { createSelector } from 'reselect';

export const selectIsLoading = state => state.global.isLoading;

export const selectIsModalLogoutOpen = state => state.global.isModalLogoutOpen;

export const selectIsModalAddTransactionOpen = state =>
  state.global.isModalAddTransactionOpen;

export const selectIsModalEditTransactionOpen = state =>
  state.global.isModalEditTransactionOpen;

export const selectIsModalDeleteTransactionOpen = state =>
  state.global.isModalDeleteTransactionOpen;

export const modalsIsOpen = createSelector(
  [
    selectIsModalLogoutOpen,
    selectIsModalAddTransactionOpen,
    selectIsModalEditTransactionOpen,
    selectIsModalDeleteTransactionOpen,
  ],
  (isLogoutModalOpen, isEditModalOpen, isAddModalOpen, isDeleteModalOpen) => {
    return (
      isLogoutModalOpen ||
      isEditModalOpen ||
      isAddModalOpen ||
      isDeleteModalOpen
    );
  }
);
