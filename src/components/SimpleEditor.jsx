import React from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function SimpleEditor() {


  return (
    <div>
      <Editor
        // editorState={editorState}
        toolbarClassName="bg-silver rounded-sm outline-none border-0"
        wrapperClassName="w-full h-40 "
        editorClassName="bg-silver px-5 py-1 rounded-sm"
        // onEditorStateChange={this.onEditorStateChange}
        placeholder="Type something..."
      />
    </div>
  )
}

