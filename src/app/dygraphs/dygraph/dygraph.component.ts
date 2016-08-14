import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'labs-dygraph',
  template: `
    <div #dygraph>
      Loading Graph...
    </div>
  `
})
export class DygraphComponent implements AfterViewInit {

  /**
   * Initial data to create Dygraph
   */
  @Input() initialData: DygraphPoint[];

  @ViewChild('dygraph') child: ElementRef;

  private dygraph: Dygraph;
  private _options: DygraphOptions = {};
  private created = false;
  private initialOptions: DygraphOptions;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    // In case options are not provided but only data is provided initially
    // Then graph is created from this hook
    if ( !this.created && this.getInitialData().length > 0 ) {
      this.createDygraph();
    }
  }

  @Input()
  public get options(): DygraphOptions {
    return this._options;
  }

  /**
   * Options of Dygraph
   * If data is not provided then initial options are preserved untill creation
   * Updates of options will update dygraph
   * New data can be updated using options.file
   */
  public set options(options) {
    if (options ) {
      this._options = options;
      if ( this.created ) {
        // Updated if already created
        this.updateDygraph(options);
      } else if ( options.file ) {
        // Dygraph is not created and data is provided through `options.file`
        this.initialData = <DygraphPoint[]>options.file;
        delete this._options.file;
        this.createDygraph();
      } else if ( this.getInitialData().length > 0 ) {
        // No options provided initially but data is provided
        this.createDygraph();
      } else {
        // Save the options if there is not data for merge during creation of Dygraph
        this.initialOptions = options;
      }
    }
  }

  private getInitialData(): DygraphPoint[] {
    // Return blank array if initialData is not present
    // Graph will be created only if `initilData.length > 0`
    return this.initialData ? this.initialData : [];
  }

  /**
   * Create Dygraph
   */
  private createDygraph() {
    let mergedOptions = {};

    // Merge Options if initial options are available
    if (this.initialOptions) {
      Object.assign(mergedOptions, this.initialOptions);
    }
    Object.assign(mergedOptions, this._options);
    this.created = true;
    this.dygraph = new Dygraph( this.child.nativeElement,
          this.getInitialData(),
          mergedOptions
        );
  }

  /**
   * Update Dygraph, invoked whenever options is updated
   */
  private updateDygraph(options) {
    this.dygraph.updateOptions(options, false);
  }
}
