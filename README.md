A small button to add to your codec to toggle between Motion and Sharpness on a selected input when sharing content in a call.

A quick way for users to switch between Sharpness and Clarity on a video codec when sharing content since there isn't any easy way to select this option for typical users.

There are two main files:
  roomcontrolconig.XML
  Motion-sharpness with button check javascript file
  
  
  the XML is the button to load to the UA Extensions editor of the codec - I suggest making this visible only when in a call
  
  Javascript is used to listen for the pop-up window and setting controlling the functions. This is loaded to your Macro Editor.
  
The script will check the current setting on the input and latch the correct button to the users knowing the devices' current setting. If this is changed in the backend, the button selection will update with the pop-up window. The button will also toggle with the user's selections. 

Note: When testing with the Desk Pro, I noticed the button would unlatch after a selection is made. So I added two re-checks after a selection is made to ensure that the button stays latched or re-latches if the selected button unlatches.


I do not guaranty this to work.
The code is written to modify quality selection on input 2.
