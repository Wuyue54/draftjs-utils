/* @flow */

import {
  getEntityRange,
  setColors,
  setFontSizes,
  setFontFamilies,
  getCustomStyleMap,
  toggleCustomInlineStyle,
  getSelectionEntity,
  removeAllInlineStyles,
  getSelectionInlineStyle,
  getSelectionCustomInlineStyle,
} from './inline';
import {
  getSelectedBlocksMap,
  getSelectedBlocksList,
  getSelectedBlock,
  getAllBlocks,
  getSelectedBlocksType,
  removeSelectedBlocksStyle,
  getSelectionText,
  addLineBreakRemovingSelection,
  insertNewUnstyledBlock,
  clearEditorContent,
  setBlockData,
  getSelectedBlocksMetadata,
} from './block';
import handleNewLine from './keyPress';
import {
  isListBlock,
  changeDepth,
} from './list';

module.exports = {
  // Functions related to blocks
  getSelectedBlocksMap,
  getSelectedBlocksList,
  getSelectedBlock,
  getAllBlocks,
  getSelectedBlocksType,
  removeSelectedBlocksStyle,
  getSelectionText,
  addLineBreakRemovingSelection,
  insertNewUnstyledBlock,
  clearEditorContent,
  setBlockData,
  getSelectedBlocksMetadata,
  // Functions related to inline styles
  getEntityRange,
  setColors,
  setFontSizes,
  setFontFamilies,
  getCustomStyleMap,
  toggleCustomInlineStyle,
  getSelectionEntity,
  removeAllInlineStyles,
  getSelectionInlineStyle,
  getSelectionCustomInlineStyle,
  // KeyPress related Functions
  handleNewLine,
  // Lists related Functions
  isListBlock,
  changeDepth,
};
