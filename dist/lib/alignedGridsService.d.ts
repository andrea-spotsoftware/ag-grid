// Type definitions for ag-grid v13.1.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { AgEvent, ColumnEvent } from "./events";
import { Column } from "./entities/column";
export declare class AlignedGridsService {
    private gridOptionsWrapper;
    private columnController;
    private gridPanel;
    private eventService;
    private logger;
    private consuming;
    private setBeans(loggerFactory);
    init(): void;
    private fireEvent(callback);
    private onEvent(callback);
    private fireColumnEvent(event);
    fireHorizontalScrollEvent(horizontalScroll: number): void;
    onScrollEvent(horizontalScroll: number): void;
    getMasterColumns(event: ColumnEvent): Column[];
    getColumnIds(event: ColumnEvent): string[];
    onColumnEvent(event: AgEvent): void;
    private processGroupOpenedEvent(groupOpenedEvent);
    private processColumnEvent(colEvent);
}
