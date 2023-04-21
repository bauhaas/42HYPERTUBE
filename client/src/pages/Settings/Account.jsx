import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import {
  OverlayContainer,
  OverlayProvider,
  useModal,
  useOverlay,
  usePreventScroll,
} from '@react-aria/overlays';
import { useRef, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { Avatar } from '../../components/ui/Avatar';
import { Button } from '../../components/ui/Button';
import { ActionHeader } from './Components/ActionHeader';
import { TabHeader } from './Components/TabHeader';

// function ModalButton() {
//   const [isOpen, setIsOpen] = useState(false);
//   const buttonRef = useRef();
//   const { dialogProps } = useDialog({}, buttonRef);

//   return (
//     <>
//       <button ref={buttonRef} onClick={() => setIsOpen(true)}>
//         Open Modal
//       </button>
//       {isOpen && (
//         <OverlayContainer>
//           <div className="modal z-auto" {...dialogProps}>
//             <h1>Modal Title</h1>
//             <p>Modal Content</p>
//             <button onClick={() => setIsOpen(false)}>Close Modal</button>
//           </div>
//         </OverlayContainer>
//       )}
//     </>
//   );
// }

// function ModalButton() {
//   const [isOpen, setIsOpen] = useState(false);
//   const buttonRef = useRef();
//   const { overlayProps } = useOverlay({
//     isOpen,
//     onClose: () => setIsOpen(false),
//     isDismissable: true,
//   });
//   const { dialogProps } = useDialog({}, buttonRef);

//   return (
//     <>
//       <button ref={buttonRef} onClick={() => setIsOpen(true)}>
//         Open Modal
//       </button>
//       {isOpen && (
//         <div {...overlayProps}>
//           <div {...dialogProps}>
//             <h1>Modal Title</h1>
//             <p>Modal Content</p>
//             <button onClick={() => setIsOpen(false)}>Close Modal</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

export const Modal = (props) => {
  console.log(props);
  if (!props.isOpen) return null;

  return (
    <OverlayProvider>
      <ModalDialog isDismissable {...props}></ModalDialog>
    </OverlayProvider>
  );
};

export function ModalDialog(props) {
  const { title, children, leftIcon, rightIcon, onRightIconClick } = props;

  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  const ref = useRef(null);
  const { overlayProps, underlayProps } = useOverlay(props, ref);

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  usePreventScroll();
  const { modalProps } = useModal();

  // const { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-light/50"
      {...underlayProps}
    >
      <FocusScope contain restoreFocus autoFocus>
        <div
          className="w-1/2 rounded-lg bg-red-500 p-4 text-light"
          {...overlayProps}
          // {...dialogProps}
          {...modalProps}
          ref={ref}
        >
          <div className="flex items-center justify-between">
            <div>{leftIcon}</div>
            <div
              onClick={onRightIconClick}
              isClickable={typeof onRightIconClick === 'function'}
            >
              {rightIcon}
            </div>
          </div>
          <div>{title}</div>
          {children}
        </div>
      </FocusScope>
    </div>
  );
}

export const AccountTab = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const c = () => {
    alert(1);
  };
  return (
    <>
      <TabHeader i18nKey="settings.accountTab" />
      <div className="mt-4 mb-4 flex flex-col rounded-md bg-slate-300">
        <div className="h-24 rounded-t-md bg-light-focus"></div>
        <div className="relative  flex flex-col gap-4 rounded-b-md bg-mid p-4 pt-24 dark:bg-dark">
          <div className="absolute -top-10 flex flex-row">
            <button className="rounded-full border-8 border-mid bg-mid dark:border-dark dark:bg-dark">
              <Avatar
                className="hover:opacity-50"
                rounded
                size="xxl"
                src="https://randomuser.me/api/portraits/men/75.jpg"
              />
            </button>
            <div className="self-center p-1 font-bold dark:text-light">
              John Doe
            </div>
          </div>

          <div className="flex pl-4">
            <div className="grow">
              <div className="text-xs font-bold uppercase tracking-tight dark:text-light">
                <Trans i18nKey="settings.account.firstNameLabel" />
              </div>
              <div className="dark:text-light">John</div>
            </div>
            <button
              onClick={() => {
                setIsModalOpen(true);
              }}
              className="my-1 rounded-md bg-light-hover py-0.5 px-4 hover:bg-light dark:bg-mid dark:text-light dark:hover:bg-mid-hover"
            >
              <Trans i18nKey="settings.account.modify" />
            </button>
          </div>
          <div className="flex pl-4">
            <div className="grow">
              <div className="text-xs font-bold uppercase tracking-tight dark:text-light">
                <Trans i18nKey="settings.account.lastNameLabel" />
              </div>
              <div className="dark:text-light">Doe</div>
            </div>
            <button
              onClick={() => {
                setIsModalOpen(true);
              }}
              className="my-1 rounded-md bg-light-hover py-0.5 px-4 hover:bg-light dark:bg-mid dark:text-light dark:hover:bg-mid-hover"
            >
              <Trans i18nKey="settings.account.modify" />
            </button>
          </div>
          <div className="flex pl-4">
            <div className="grow">
              <div className="text-xs font-bold uppercase tracking-tight dark:text-light">
                <Trans i18nKey="settings.account.emailLabel" />
              </div>
              <div className="dark:text-light">john.doe@example.com</div>
            </div>
            <button
              onClick={() => {
                setIsModalOpen(true);
              }}
              className="my-1 rounded-md bg-light-hover py-0.5 px-4 hover:bg-light dark:bg-mid dark:text-light dark:hover:bg-mid-hover"
            >
              <Trans i18nKey="settings.account.modify" />
            </button>
          </div>
        </div>
      </div>

      <div class="my-2 border-t-2 border-mid dark:border-light"></div>
      <ActionHeader i18nKey="settings.account.passwordLabel" />
      <Button variant="primary">
        <div className="dark:text-light">
          {' '}
          <Trans i18nKey="settings.account.passwordButton" />
        </div>
      </Button>
      <div class="my-2 border-t-2 border-mid dark:border-light"></div>
      <div id="section">
        <ActionHeader i18nKey="settings.account.deleteAccountLabel" />
        <div className="flex flex-col">
          <div className="mb-4 text-sm dark:text-light">
            <Trans i18nKey="settings.account.deleteAccountDesc" />
          </div>
          <div className="flex gap-4">
            <Button variant="danger">
              <Trans i18nKey="settings.account.desactivateButton" />
            </Button>
            <Button variant="danger" outline>
              <Trans i18nKey="settings.account.deleteButton" />
            </Button>
            {/* <ModalButton /> */}
            {/* <OverlayProvider>
              <ModalButton />
            </OverlayProvider> */}
            {/* <Button
              variant="danger"
              outline
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              modal
            </Button> */}
            {/* <Modal
              isOpen={isModalOpen}
              onClose={() => {
                setIsModalOpen(false);
                setIsChecked(false);
              }}
              title="⚠️ Danger : cette action est irréversible"
              rightIcon={<button>✕</button>}
              onRightIconClick={() => {
                setIsModalOpen(false);
                setIsChecked(false);
              }}
            ></Modal> */}
          </div>
        </div>
      </div>
    </>
  );
};
