import constants from '../constants';
import GridOptionsWrapper from "../gridOptionsWrapper";
import {ColumnGroupChild} from "../entities/columnGroupChild";
import ColumnGroup from "../entities/columnGroup";

// takes in a list of columns, as specified by the column definitions, and returns column groups
export default class ColumnUtils {

    private gridOptionsWrapper: GridOptionsWrapper;

    public init(gridOptionsWrapper: GridOptionsWrapper): void {
        this.gridOptionsWrapper = gridOptionsWrapper;
    }

    public calculateColInitialWidth(colDef: any): number {
        if (!colDef.width) {
            // if no width defined in colDef, use default
            return this.gridOptionsWrapper.getColWidth();
        } else if (colDef.width < constants.MIN_COL_WIDTH) {
            // if width in col def to small, set to min width
            return constants.MIN_COL_WIDTH;
        } else {
            // otherwise use the provided width
            return colDef.width;
        }
    }

    public deptFirstAllColumnTreeSearch(tree: ColumnGroupChild[], callback: (treeNode: ColumnGroupChild)=>void ): void {

        if (!tree) { return; }

        tree.forEach( (child: ColumnGroupChild) => {
            if (child instanceof ColumnGroup) {
                this.deptFirstAllColumnTreeSearch((<ColumnGroup>child).getChildren(), callback);
            }
            callback(child);
        });

    }

    public deptFirstDisplayedColumnTreeSearch(tree: ColumnGroupChild[], callback: (treeNode: ColumnGroupChild)=>void ): void {

        if (!tree) { return; }

        tree.forEach( (child: ColumnGroupChild) => {
            if (child instanceof ColumnGroup) {
                this.deptFirstDisplayedColumnTreeSearch((<ColumnGroup>child).getDisplayedChildren(), callback);
            }
            callback(child);
        });

    }

}